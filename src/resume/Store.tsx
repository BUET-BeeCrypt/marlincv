import { atom } from 'jotai';


export const getEmptyProfile = () => {
    // name, phone, location, email, social links
    return {
        name: '',
        phone: '',
        location: '',
        email: '',
        socials: [{
            id: Date.now().toString(),
            text: '',
            link: '',
            selected: true,
        }]
    }
}
export const getEmptyEducation = () => { 
    return {
        id: Date.now().toString(),
        institution: '', 
        location: '',
        degree: '',
        result: '', 
        responsibilities: [{ id: Date.now().toString(),text: '', selected: true }],
        startDate:'',
        endDate:'',
        selected: true
    } 
}

export const getEmptyExperience = () => {
    return {
        id: Date.now().toString(),
        company: '', 
        location: '',
        startDate: '',
        endDate: '',
        isCurrent: false,
        position: '', 
        responsibilities: [{ id: Date.now().toString(), text: '', selected: true }], 
        selected: true 
    }
}

export const getEmptyAchievement = () => {
    return {
        id: Date.now().toString(),
        competition: '', 
        position: '', 
        date: '',
        selected: true 
    }
}


export const educationData = atom([getEmptyEducation()])
export const experienceData = atom([getEmptyExperience()])
export const achievementData = atom([getEmptyAchievement()])
export const profileData = atom(getEmptyProfile())
export const templateData = atom('')
export const renderTimeData = atom(0)
export const downloadData = atom(0)