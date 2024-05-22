-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "isStarted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "life" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
