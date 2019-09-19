function grade(gradeNumber) {
    switch(gradeNumber) {
        case gradeNumber >= 90:
            console.log(`you got an A!`)
            break
        case gradeNumber >= 80:
            console.log(`you got an B!`)
            break
        case gradeNumber >= 70:
            console.log(`you got an C!`)
            break  
        case gradeNumber >= 60:
            console.log(`you got an D!`)
            break  
        default:
            console.log('You got less than 60 so you failed ')            
    }
}

grade(75);