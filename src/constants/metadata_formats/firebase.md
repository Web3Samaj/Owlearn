userID ## ID
User - {
ProfilePic: "String",
FullName: "String",
Bio: "String"
}

eduID ## ID
Educator - {
ProfilePic: "String",
FullName: "String",
Role: "String"
Bio: "String"
Rating: "number"
Socials: { store the socialLinks }
}

courseID ## Address {
"Rating" - "Number",
"Sequence" - "ObjectId - nested Collection(object){ tokenID , title }"
}
