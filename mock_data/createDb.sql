CREATE TABLE
    "public"."TeamMember" (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255)
    );

CREATE TABLE
    "public"."Project" (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255)
    );

CREATE TABLE
    "public"."Deliverable" (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        "startDate" DATE DEFAULT CURRENT_DATE,
        "projectId" INTEGER NOT NULL,
        FOREIGN KEY ("projectId") REFERENCES "public"."Project"(id) ON DELETE CASCADE
    );

CREATE TABLE
    "public"."Element" (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        hours INTEGER,
        "userId" INTEGER UNIQUE NOT NULL,
        "deliverableId" INTEGER NOT NULL,
        "assignedToId" INTEGER NOT NULL,
        FOREIGN KEY ("deliverableId") REFERENCES "public"."Deliverable"(id) ON DELETE CASCADE,
        FOREIGN KEY ("assignedToId") REFERENCES "public"."TeamMember"(id) ON DELETE CASCADE
    );