FROM node:19-bullseye
RUN apt-get update && apt-get install -y locales && echo "LC_ALL=en_US.UTF-8" >> /etc/environment && echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen && echo "LANG=en_US.UTF-8" > /etc/locale.conf && locale-gen en_US.UTF-8
ENV LC_ALL en_US.UTF-8
COPY package.json .
RUN npm install .
COPY ./ .
RUN npm run generate
# ENV DATABASE_URL=file:./db.sqlite
RUN npm run build
ENV PORT=$PORT
CMD exec npm run start
