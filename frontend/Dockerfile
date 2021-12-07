FROM node:13.12.0-alpine
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install react-router-dom@6
RUN npm install bootstrap
RUN npm install axios
RUN npm install --save-dev redux-devtools-extension
RUN npm install react-validation validator
RUN npm install react-bootstrap
RUN npm install react-redux
RUN npm install redux-thunk
RUN npm install react-toastify


COPY . ./
EXPOSE 3000