const submit = () => {
    const addressValue = address.value.toLowerCase()
        ;
    console.log(addressValue)

    if (userName.value == '' || number.value == '' || package.value == '' || address.value == '') {
        alert('Please fill in all fields')
    }
}

const submitEssay = () => {
    const essayValue = essay.value.trim().replace(/\s+/g, " ")
    console.log(essayValue);

    if (studentName.value == '' || matricNumber.value == '' || essay.value == '') {
        alert('Please fill in all fields')
    }
}

const checkDiscount = () => {
    const customerNameValue = customerName.value
    const itemsNumber = items.value

    if (customerNameValue == '' || items.value == '') {
        alert('Please fill in all fields')
    } else if (itemsNumber % 2 == 0) {
        showDiscount.innerHTML = "✅ You get a Discount"
    } else {
        showDiscount.innerHTML = "❌ Oops! Sorry, you do not get a discount"
    }
}

const checkTemperature = () => {
    const tempValue = temperature.value

    if (tempValue == '') {
        alert('Please fill in all fields')
    } else if (tempValue <= 19) {
        showTemp.innerHTML = "It's a cold day today, Stay Warm"
    } else if (tempValue >= 20 && tempValue <= 28) {
        showTemp.innerHTML = "It's a warm today"
    } else if (tempValue >= 28) {
        showTemp.innerHTML = "It's a hot day today, Stay Warm"
    }
}

const checkBMI = () => {
    if (height.value == '' || weight.value == '') {
        alert('Please fill in all fields')
    } else {
        console.log(height.value, weight.value);
        const formula = Number(weight.value) / (Number(height.value) ** 2)
        console.log(formula);
        if (formula < 18.5) {
            showStatus.innerHTML = "You are underweight, you need to eat more"
        } else if (formula >= 18.5 && formula <= 24.9) {
            showStatus.innerHTML = "✅ You are healthy, keep it up"
        } else if (formula >= 25 && formula <= 29.9) {
            showStatus.innerHTML = "You are overweight, keep it down"
        } else if (formula >= 30) {
            showStatus.innerHTML = "You are obese, visit an hospital ASAP"
        }
    }
}

const checkName = () => {
    const gamerNameValue = gamerName.value
    const validPattern = /^[A-Za-z0-9_]+$/

    if (gamerNameValue == '') {
        alert('Please fill in all fields')
    } else if (validPattern.test(gamerNameValue)) {
        validateName.innerHTML = "✅ Your Username is valid"
    } else {
        validateName.innerHTML = "❌ Your Username is Invalid. Use only letters, numbers, or underscores"
    }
}


const checkWeight = () => {
    if (luggageWeight.value == '') {
        alert('Please fill in all fields')
    } else if (luggageWeight.value <= 19) {
        showWeight.innerHTML = "❌ UnderWeight"
    } else if (luggageWeight.value >= 20 && luggageWeight.value <= 30) {
        showWeight.innerHTML = "✅ Allowed"
    } else if (luggageWeight.value > 30) {
        showWeight.innerHTML = " ❌ OverWeight"
    }
}

const checkEmail = () => {
    const emailValue = studentEmail.value.trim().toLowerCase()

    const emailPattern = /^[a-z0-9._-]+@oauife\.edu\.ng$/

    if (studentNames.value == '' || studentMatricNumber.value == '' || studentEmail.value == '') {
        alert('Please fill in all fields')
    } else if (emailPattern.test(emailValue)) {
        validateEmail.innerHTML = "✅ Valid OAU Email"
    } else {
        validateEmail.innerHTML = "❌ Invalid Email. Use @oauife.edu.ng"
    }
}

const checkScore = () => {
    if (enuguName.value == '' || studentScore.value == '') {
        alert('Please fill in all fields')
    } else if (studentScore.value >= 70 && studentScore.value <= 100) {
        scoreCheck.innerHTML = "A Excellent"
    } else if (studentScore.value >= 60 && studentScore.value <= 69) {
        scoreCheck.innerHTML = "B Very Good"
    } else if (studentScore.value >= 50 && studentScore.value <= 59) {
        scoreCheck.innerHTML = "C Good"
    } else if (studentScore.value >= 40 && studentScore.value <= 49) {
        scoreCheck.innerHTML = "D Pass"
    } else if (studentScore.value >= 0 && studentScore.value <= 39) {
        scoreCheck.innerHTML = "E Fail"
    }
}

const discountCheck = () => {
    if (price.value == '') {
        alert('Please fill in all fields')
    } else if (price.value < 5000) {
        discountPriceCheck.innerHTML = "❌ Oops! sorry, you are not eligible for our Discount"
    } else if (price.value >= 5000 && price.value <= 10000) {
        const discountedPrice = price.value - (5 / 100 * price.value)
        discountPriceCheck.innerHTML = "You discounted price is" + " " + discountedPrice
    } else if (price.value >= 10000 && price.value <= 20000) {
        const discountedPrice = price.value - (10 / 100 * price.value)
        discountPriceCheck.innerHTML = "You discounted price is" + " " + discountedPrice
    } else if (price.value >= 20000) {
        const discountedPrice = price.value - (15 / 100 * price.value)
        discountPriceCheck.innerHTML = "You discounted price is" + " " + discountedPrice
    }
}

const checkEligibility = () => {
    const scoreValue = Number(jambScore.value)
    const courseValue = course.value.toLowerCase()
    if (jambScore.value == '') {
        alert('Please fill in all fields')
    } else if (courseValue === "medicine" && scoreValue >= 280) {
        eligibilityCheck.innerHTML = "✅ Congratulations! You are eligible to study Medicine"; eligibilityCheck.style.color = "green";
    } else if (courseValue === "medicine" && scoreValue < 280) {
        eligibilityCheck.innerHTML = "❌ Oops! Sorry, you are not Eligible to study Medicine"; eligibilityCheck.style.color = "red";
    } else if (courseValue === "engineering" && scoreValue >= 250) {
        eligibilityCheck.innerHTML = "✅ Congratulations! You are eligible to study Engineering"; eligibilityCheck.style.color = "green";
    } else if (courseValue === "engineering" && scoreValue < 250) {
        eligibilityCheck.innerHTML = "❌ Oops! Sorry, you are not Eligible to study Engineering"; eligibilityCheck.style.color = "red";
    } else if (courseValue === "science" && scoreValue >= 220) {
        eligibilityCheck.innerHTML = "✅ Congratulations! You are eligible to study Science"; eligibilityCheck.style.color = "green";
    } else if (courseValue === "science" && scoreValue < 220) {
        eligibilityCheck.innerHTML = "❌ Oops! Sorry, you are not Eligible to study Science"; eligibilityCheck.style.color = "red";
    } else if (courseValue === "arts" && scoreValue >= 200) {
        eligibilityCheck.innerHTML = "✅ Congratulations! You are eligible to study Art"; eligibilityCheck.style.color = "green";
    } else if (courseValue === "arts" && scoreValue < 200) {
        eligibilityCheck.innerHTML = "❌ Oops! Sorry, you are not Eligible to study Art"; eligibilityCheck.style.color = "red";
    }
}

const checkStatus = () => {
    const birthValue = Number(birthYear.value)

    const age = 2025 - birthValue

    if (birthYear.value == '') {
        alert('Please fill in all fields')
    } else if (age >= 18) {
        checkVoteStatus.innerHTML = "✅ You are Eligible to Vote"; checkVoteStatus.style.color = "green"
    } else {
        const yearsLeft = 18 - age;
        checkVoteStatus.innerHTML = "❌ Oops! You are not Eligible to Vote  you have" + "  " + yearsLeft + "  " + "years left"; checkVoteStatus.style.color = "red"
    }
}