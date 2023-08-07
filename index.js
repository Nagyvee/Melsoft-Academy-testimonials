(function(){

    // Import Important Html Elements
    const customerName = document.getElementById("customer-name")
    const customerImg = document.querySelector("#customer-img")
    const customerMessage = document.getElementById("customer-message")
    let starsEl = document.getElementById("stars")
    const buttons = document.querySelectorAll(".btn")

    // creating variable to store customer object 
    let index = 0
    let customers = []

    // creating customer object
    function Customer(img, name, message, stars){
       this.img = img
       this.name = name
       this.message = message
    }

    // push customers to customers array
    function createCustomer(imgUrl, name, message, stars){
       let getImage = `./card-imgs/${imgUrl}.jpeg`
       let customer = new Customer(getImage, name, message, stars);
       customers.push(customer)
    }

    // adding customer's details to an objects
    createCustomer("card1","Tionne","Melsoft Academy academy is exceptional! The teachers are incredibly knowledgeable and always willing to go the extra mile to help us understand complex concepts. I feel lucky to be part of such a supportive and inspiring learning environment.")
    createCustomer("card2","Gladman","I've attended several computer science programs before, but Melsoft Academy stands out from the rest. The curriculum is well-designed, and the practical projects have significantly improved my coding skills. I'm grateful for the invaluable learning experience.")
    createCustomer("card3","Luph","Melsoft Academy has the best mentors who truly care about their students' success. They create a positive and inclusive atmosphere where everyone feels comfortable asking questions and collaborating on projects. It's a fantastic place to grow and learn.")
    createCustomer("card4","Nigel","I cannot praise Melsoft Academy enough! The facilities are top-notch, and the resources provided are comprehensive.Melsoft Academy fosters a passion for learning and motivates us to explore new areas of computer science.")
    createCustomer("card5","Yolokazi","Attending Melsoft has been a game-changer for me. The hands-on approach to learning has made the subjects more engaging and applicable in real-world scenarios. I'm proud to be associated with this institution.")
    createCustomer("card6","Bongani","Melsoft Academy's community is like a family. Students are friendly and supportive, and the faculty is approachable and dedicated to our success. It's a place where you can form lasting connections with like-minded individuals.")
    createCustomer("card7","Junaid","The curriculum at Melsoft Academy is forward-thinking and keeps pace with the ever-evolving tech industry. I'm confident that the skills I'm developing here will give me a competitive edge in my future career.")
    createCustomer("card8","Tintswalo",  "I'm thrilled to be part of Melsoft Academy. The personalized attention I receive from the instructors has boosted my confidence in tackling challenging coding problems. I can see my progress every day, and it's incredibly rewarding.")

    // display customers 
function displayCustomer(){
    customerImg.src = customers[index].img
    customerName.textContent = customers[index].name
    customerMessage.textContent= customers[index].message
}

// add Eventlisters for Prev & next buttons
buttons.forEach(function (button) {
    button.addEventListener("click", function(e){
    if(e.target.parentElement.classList.contains("prevBtn")){
        index = (index - 1 + customers.length) % customers.length;
    }else if (e.target.parentElement.classList.contains("nextBtn")){
        index = (index + 1 )% customers.length
    }
    displayCustomer()
    })
})


displayCustomer()
})()

