Dynamic Server serving the certificate Data for a user enrolled in a course

- Show the progress of the user , maintained off chain thorugh database and served as a dynamic
- Converted to Certificate at the completion of the courses

{
"name" : "string Name of the user and course certificate",
"image" : "dynamic image URI for the current stats",
"description" : "description of the user and badge",
"attributes" : [
{
"trait_type": "Coure Completed",
"value" : "false or True (Boolean)"
},
{
"trait_type" : "progress",
"value" : "number - total Lecture completed",
"max_value" : "number - total No of lectures in the course"
},
{
"display_type": "number",
"trait_type": "Ranking",
"value": "number - Rank of the person , when they complete a course'
},
{
"display_type": "date",
"trait_type": "completion Date",
"value": 'number - UNIX Timestamp format for completion date and time (seconds)'
}
]
}
