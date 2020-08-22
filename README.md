# evo-scoreboard-api

A Node.js read-only API for EvoSC databases

## Usage

### Docker image

```
docker run barkbork/evo-scoreboard-api -p 3000:80 -e DB_HOST=localhost -e DB_PORT=3306 -e DB_USER=db_user -e DB_PASSWORD=db_password -e DB_NAME=db_name
```

> Don't forget to replace the environment variables with your own values !

### From the repository

You need to have both **git** and **node** installed  
Execute these commands in the shell of your choice :

```
git clone https://github.com/barklebork/evo-scoreboard-api.git
cd evo-scoreboard-api

# Install dependencies
npm install

# Run
PORT=3000 DB_HOST=localhost DB_PORT=3306 DB_USER=db_user DB_PASSWORD=db_password DB_NAME=db_name npm start
```

> Don't forget to replace the environment variables with your own values !

## Endpoints

Once the app is running, you can access the API at http://localhost:3000/ (3000 can be replaced by the port given to the run command).
Because this API is read-only, all endpoints are reachable only with a GET request.

### Players

 - `/players` : returns a list of all players that ever played on the server
 - `/players/:playerId` : returns details about one player (with server statistics)
 - `/players/:playerId/pbs` : returns a list of all PBs of one player
 - `/players/:playerId/records` : returns a list of all local records of one player

### Maps

 - `/maps` : returns a list of all maps on the server
 - `/maps/:mapId` : returns details about one map
 - `/maps/:mapId/pbs` : returns a list of all PBs on a specific map
 - `/maps/:mapId/records` : returns a list of all local records on a specific maps

### Error response

When the server encounters an error, a corresponding HTTP status code is sent to the client with a JSON body in the following format :

```json
{
    "message": "error details"
}
```
