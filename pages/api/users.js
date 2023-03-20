import {users} from '../../data/userdata'
export default function handler(req,res) {
   
    if(req.method === 'GET'){
        res.status(200).json(users)
    }
    else if(req.method === 'POST'){

        const requestData = JSON.parse(req.body)
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
        res.status(201).json(newUser)

    }
}
