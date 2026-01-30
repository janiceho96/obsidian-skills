import { loadSkills } from './utils';

async function main() {
    try {
        const skills = await loadSkills();
        // Initialize and configure skills here
        console.log('Skills loaded successfully:', skills);
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

main();