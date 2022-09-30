export const useVillage = () => {
return useState('village', () => ({
        name: 'Mützerath',
        villagers: {
            baseCapacity : 10,
            capacity: 10,
            total: 10,
            free: 10,
            support: 0,
            builders: 0
        },
        materials: {
            wood: 10,
            screws: 40,
            pallets: 0,
            stone: 0,
            iron: 0,
        },
        structures: [],
        mood: {
            happiness: 100,
            awareness: 100,
            satisfaction: 100,
            health: 100,
            safety: 100,
            religion: 100,
            science: 100,
            technology: 100,
            entertainment: 100,
            sports: 100,
        }
    }))
}