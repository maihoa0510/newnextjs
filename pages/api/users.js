import {users} from '../../data/userdata'

export default function handler(req,res) {
    if(req.method === 'GET'){
        res.status(200).json(users)
    }
    else if(req.method === 'POST'){

        const requestData = JSON.parse(req.body)
        console.log(requestData)

        const email = requestData.email
        const firstname = requestData.firstname
        const lastname = requestData.lastname
        const business = requestData.business

        const newUser = {
            id: Date.now(),
            email: email,
            firstname: firstname,
            lastname: lastname,
            business: business,
        }
        
        users.push(newUser)
        console.log("req:", req.body)
        console.log(":", req.body.email)
        console.log("users:", users)

        res.status(201).json(newUser)
    }
}
