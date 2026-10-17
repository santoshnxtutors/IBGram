import { AccountSettings } from "@/components/dashboard/AccountSettings";
import { ProfileVisibility } from "@/components/dashboard/ProfileVisibility";

export const dynamic = "force-dynamic";

export default function TutorSettingsPage() {
  // Visibility sits above the account controls: it is the setting tutors come here for.
  return <AccountSettings before={<ProfileVisibility />} />;
}
