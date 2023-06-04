curl --silent --location 'http://localhost:3000/members' --header 'Content-Type: application/json' --data-raw '{"firstName":"Oksana","lastName":"Kaka","email": "ok@gmail.com"}'
curl --silent --location 'http://localhost:3000/members' --header 'Content-Type: application/json' --data-raw '{"firstName":"Semen","lastName":"Doopa","email": "sm@gmail.com"}'
curl --silent --location 'http://localhost:3000/members' --header 'Content-Type: application/json' --data-raw '{"firstName":"Vasyl","lastName":"Bibikalo","email": "vb@gmail.com"}'
curl --silent --location 'http://localhost:3000/teams' --header 'Content-Type: application/json' --data-raw '{"name": "Alco bees","description": "The very best team ever","teamLead": "vb@gmail.com","members": ["sm@gmail.com","ok@gmail.com"]}'

echo "\n\n\nAuto populated Team:\n`curl --location 'http://localhost:3000/teams' | jq`"