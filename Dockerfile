### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies 
# This is needed to build and compile our code 
# while generating the docker image
FROM node:alpine AS build
# Create a Virtual directory inside the docker image
WORKDIR '/dist/src/app'
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN npm run build --prod --omit=dev

### STAGE 3:LIST DIRECTORY ###
# stage 2

RUN ls -al
RUN ls -al dist/
RUN ls -al dist/pokemon

### STAGE 3:RUN ###
# Defining nginx image to be used
FROM nginx:alpine AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /dist/src/app/dist/pokemon /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
