const users = []

const addUser = ({id, username, room}) =>{
    
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data

    if(!username || !room){
        return{
            error : 'Username and room are required!'
        }
    }

    //check for existing user

        const existingUser = users.find((user) =>{
            return user.room === room && user.username === username
        })


       //validate Username

        if(existingUser){
            return{
                error : 'Username is in use!'
            }
        }


        //store user

        const user = { id, username, room }   //creating an object variable 
        users.push(user)
        return {user}
}


const removeUser = (id) =>{
    const index = users.findIndex((user) =>{
        return user.id === id
    })
        if(index != -1 ) {
            return users.splice(index, 1)[0]
        }
    
}


const getUser = (id) =>{
           const myUser =  users.find((user) => {
                return user.id === id
    })   
         return myUser
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    const ourUser = users.filter((user) =>{
        return user.room === room
    })
    return ourUser
}


// const b ={

//     id : 1,
//     username : 'dfg',
//     room : 'z'
// }

// const a = addUser(b)
// console.log(a)


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
















