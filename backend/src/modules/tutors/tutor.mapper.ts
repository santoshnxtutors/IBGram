export function toTutorDto(tutor: any) {
  return {
    id: tutor.id,
    slug: tutor.slug,
    name: tutor.name,
    subject: tutor.subject,
    grade: tutor.grade,
    rating: Number(tutor.rating),
    reviews: tutor.reviews,
    experience: tutor.experience,
    bio: tutor.bio,
    rate: tutor.rate,
    image: tutor.image ?? "",
    tags: tutor.tutorTags?.map((item: { tag: string }) => item.tag) ?? tutor.tags ?? [],
    accent: tutor.accent,
    education: tutor.education,
    successRate: tutor.successRate,
    availability: tutor.availability,
    responseTime: tutor.responseTime,
    methodology: tutor.methodology,
    curriculum: tutor.curriculum,
    headline: tutor.headline,
    isFeatured: tutor.isFeatured,
    status: tutor.status,
    createdAt: tutor.createdAt,
    updatedAt: tutor.updatedAt
  };
}
