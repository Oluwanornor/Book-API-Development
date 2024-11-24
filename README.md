# Book API Development

#Installations

npm init -y
npm install express
npm install mongodb
npm install nodemon
npm install dotenv
npm install mongoose
npm install cors

#Run Instructions
npm run dev

#API Documentation
##**EndPoints**##
#1 Get Book
**URL:** GET/book
**Description:** Get all book
**Request Body :** 
JSON



#2 GET BookBYId
**URL:** GET/book{id}
**Description:** Get book by id
**Request Body :** 
JSON
**Error Messages**
Not Found (404)
{
    "message": "ID 67425edbf9fb97496d is not valid"
}
Bad Request (400)
{
    "message": "ID 67425e23cb65bd866f8c73ga is not valid"
}




#3 Create Book
**URL:** POST/book
**Description:** Create new  book
**Request Body :** 
JSON
{
  "booktitle":"The Tempest",
    "author":"William Shakespear",
    "genre": "Tragedy"
} 

**Response Body**
Success(201)
{
    "message": "Book Created Successfully.",
    "newBook": {
        "booktitle": "The Tempest",
        "author": "William Shakespear",
        "genre": "Tragedy",
        "_id": "67431c76afe4653b549b288d",
        "__v": 0
    
}


Bad Request(400)
{
   message: "Please Provide a Book Title" 
}
{ 
message: "Please Provide an Author" 
}

{ 
message: "Please Provide a genre" 
}


#4 Edit BookBYId
**URL:** PUT/book{id}
**Description:** Edit book by id
**Request Body :** 
JSON

**Response Body**
{
    "message": "Book Updated Successfully"
}
**Error Messages**
Not Found (404)
{
    "message": "ID 67425edbf9fb97496d is not valid"
}
Bad Request (400)
{
    "message": "ID 67425e23cb65bd866f8c73ga is not valid"
}

#5 DElete BookBYId
**URL:** Delete/book{id}
**Description:** Delete  book by id
**Request Body :** 
JSON

**Response Body**
{
    "message": "Book Deleted Successfully"
}
**Error Messages**
Not Found (404)
{
    "message": "ID 67425edbf9fb97496d is not valid"
}
Bad Request (400)
{
    "message": "ID 67425e23cb65bd866f8c73ga is not valid"
}

  


