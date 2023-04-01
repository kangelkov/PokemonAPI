Project Name
PokemonAPI

Installation
- Make sure you have docker installed on your machine
1. Navigate to backend ( cd backend )
2. Install needed packages ( npm install )
3. Build the docker image with elevated privileges ( sudo docker-compose build )
4. (OPTIONAL) Create an .env file on root backend directory where you can define the default PORT. If not defined => 7000 will be used
5. Start the container ( sudo docker-compose up )
--> You should see that server is running : [INFO] Server is running on port 7000
6. Navigate to frontend ( cd frontend )
7. Install needed packages ( npm install )
8. Build the docker image with elevated privileges ( sudo docker build -t frontend . )
9. Start the container ( sudo docker run -d -p 3000:3000 --name frontend frontend )
10. Go to https://localhost:3000 to see the application

Features
- Caching 
- Define team with team name and random pokemons
- List all pokemons
- Edit pokemon

License
GPL
