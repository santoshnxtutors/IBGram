import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Markdown } from "../Markdown";

/** Covers the pipe-table and :::figure::: branches added to the tokenizer. */
describe("Markdown tables", () => {
  it("renders a pipe table as a real table with headers and cells", () => {
    render(
      <Markdown
        content={["| Mistake | Cause | Fix |", "|---|---|---|", "| Skipped steps | Rushing | Write every line |"].join(
          "\n",
        )}
      />,
    );
    expect(screen.getByRole("table")).toBeTruthy();
    expect(screen.getAllByRole("columnheader").map((n) => n.textContent)).toEqual(["Mistake", "Cause", "Fix"]);
    expect(screen.getByRole("cell", { name: "Skipped steps" })).toBeTruthy();
    expect(screen.getByRole("cell", { name: "Write every line" })).toBeTruthy();
  });

  it("pads short rows so cells stay aligned to their header", () => {
    const { container } = render(
      <Markdown content={["| A | B | C |", "|---|---|---|", "| only |"].join("\n")} />,
    );
    expect(container.querySelectorAll("tbody td")).toHaveLength(3);
  });

  it("stops the table at the first non-table line and keeps following content", () => {
    render(<Markdown content={["| A |", "|---|", "| 1 |", "", "After the table."].join("\n")} />);
    expect(screen.getAllByRole("row")).toHaveLength(2); // header + one body row
    expect(screen.getByText("After the table.")).toBeTruthy();
  });

  it("leaves a pipe line with no delimiter row as an ordinary paragraph", () => {
    render(<Markdown content="| not | a | table |" />);
    expect(screen.queryByRole("table")).toBeNull();
  });

  it("renders inline markdown inside cells", () => {
    render(<Markdown content={["| H |", "|---|", "| [Tutors](/tutors/) |"].join("\n")} />);
    expect(screen.getByRole("link", { name: "Tutors" }).getAttribute("href")).toBe("/tutors/");
  });
});

describe("Markdown figures", () => {
  it("renders a known figure block", () => {
    const { container } = render(<Markdown content=":::figure three-phase-system:::" />);
    expect(container.querySelector("figure")).toBeTruthy();
    expect(screen.getByText("Foundation")).toBeTruthy();
  });

  it("uses a custom caption when one is supplied", () => {
    render(<Markdown content=":::figure grade-boundary|Boundaries move each session:::" />);
    expect(screen.getByText("Boundaries move each session")).toBeTruthy();
  });

  it("drops an unknown figure name instead of rendering a broken block", () => {
    const { container } = render(<Markdown content=":::figure not-a-real-figure:::" />);
    expect(container.querySelector("figure")).toBeNull();
    expect(container.textContent).not.toContain("not-a-real-figure");
  });

  it("gives the signature figure an accessible label", () => {
    render(<Markdown content=":::figure signature-ajay:::" />);
    expect(screen.getByRole("img", { name: /Ajay Vatsyayan/i })).toBeTruthy();
  });
});
