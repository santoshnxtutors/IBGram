export type UploadProvider = "local" | "cloudinary" | "s3";

export type AssetSummary = {
  id: string;
  provider: UploadProvider;
  key: string;
  url: string;
  filename: string;
  mimeType: string;
  sizeBytes: number;
  altText?: string | null;
};
