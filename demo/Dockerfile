# Set the base image to node
FROM node:10.16.0

# Add metadata
LABEL maintainer.name="Rajshri Mohan K S" \
  maintainer.email="rajshri.m@iqzsystems.com"

# Change shell from sh to bash
SHELL ["/bin/bash", "-c"]

# Set environment variables
ENV WORK_DIR /app/

# Set Working Directory
WORKDIR $WORK_DIR

# Set up app
COPY package*.json $WORK_DIR
RUN npm install
COPY . $WORK_DIR

# Expose port
EXPOSE 5000

CMD ["node","./index.js"]