import { PrismaClient } from '@prisma/client'
// import Forms from '../app/components/Form'

const prisma = new PrismaClient()

const data = {reg_no: "kjahfanfoai", name: "kjnkhisu", branch: "cse",
    year_of_study: "2", section: "A", batch: "21", type_of_participation: "free"}

async function main() {
    await prisma.user.create({
        data
    });
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })