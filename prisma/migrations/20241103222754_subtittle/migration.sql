/*
  Warnings:

  - You are about to drop the column `sub_tittle` on the `Posts` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Posts] DROP COLUMN [sub_tittle];
ALTER TABLE [dbo].[Posts] ADD [subtitle] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
