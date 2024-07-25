import { defineCollection } from "astro:content";
import { z } from "zod";

// Events from the symposium category
const symposiaCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean(),
        publishedDate: z.date(),
        eventType: z.enum(["symposium", "hackathon", "lecture_series"]),
        eventStart: z.date(),
        eventEnd: z.date(),
        eventLocation: z.string(),
        title: z.string(),
        excerpt: z.string(),
        topics: z.array(z.string()),
        keynotes: z.array(z.tuple([z.string(), z.string()])),
        organizers: z.array(z.string()),
        tags: z.array(z.string()),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        registration: z.object({
            registrationDeadline: z.date(),
            registrationURL: z.string(),
            abstractDeadline: z.date(),
            selectionCommitee: z.array(z.string()),
        }),
        sponsors: z.string(),
    }),
});

// Events from the hackathon categroy
const hackathonsCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean(),
        publishedDate: z.date(),
        eventType: z.enum(["symposium", "hackathon", "lecture_series"]),
        eventStart: z.date(),
        eventEnd: z.date(),
        eventLocation: z.string(),
        eventRooms: z.object({
            intro: z.string(),
            groupWork: z.array(z.string())
        }),
        title: z.string(),
        excerpt: z.string(),
        projects: z.array(z.string()),
        organizers: z.array(z.string()),
        tags: z.array(z.string()),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        registration: z.object({
            registrationDeadline: z.date(),
            registrationURL: z.string(),
        }),
        sponsors: z.string(),
    }),
});

export const collections = {
    symposia: symposiaCollection,
    hackathons: hackathonsCollection,
};