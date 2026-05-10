//src\components\Cards.tsx
import Link from 'next/link';

import type { Service } from '@/data/services';
import type { Project } from '@/data/projects';

export const ServiceCard = ({
  service,
}: {
  service: Service;
}) => (
  <article className="rounded-2xl border bg-white p-5">
    <h3 className="font-semibold">{service.title}</h3>

    <p className="mt-2 text-sm">
      {service.summary}
    </p>

    <Link
      className="mt-3 inline-block text-forest"
      href={`/services/${service.slug}`}
    >
      Learn more →
    </Link>
  </article>
);

export const ProjectCard = ({
  project,
}: {
  project: Project;
}) => (
  <article className="rounded-2xl border bg-white p-5">
    <h3 className="font-semibold">{project.name}</h3>

    <p className="mt-2 text-sm">
      {project.description}
    </p>

    <Link
      className="mt-3 inline-block text-forest"
      href={`/projects/${project.slug}`}
    >
      View project →
    </Link>
  </article>
);

export const PricingCard = ({
  title,
  price,
  text,
}: {
  title: string;
  price: string;
  text: string;
}) => (
  <article className="rounded-2xl border bg-white p-5">
    <h3 className="font-semibold">{title}</h3>

    <p className="mt-2 text-2xl font-bold text-forest">
      {price}
    </p>

    <p className="mt-2 text-sm">
      {text}
    </p>
  </article>
);