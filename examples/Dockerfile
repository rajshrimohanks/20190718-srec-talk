# Set the base image to Ubuntu
FROM ubuntu:latest

# Add metadata
LABEL maintainer.name="Rajshri Mohan K S" \
     maintainer.email="rajshri.m@iqzsystems.com"

# Change shell from sh to bash
SHELL ["/bin/bash", "-c"]

# Set environment variables
ENV WORK_DIR /app-dir
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.13.0

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install dependencies
RUN apt-get update \
     && apt-get -y install curl \
     && apt-get -y install wget \
     && apt-get -y install python build-essential \
     && apt-get -y install git \
     && apt-get -y install libpq-dev g++ make 

# Create nvm directory
RUN mkdir -p ${NVM_DIR}

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash \
     && source $NVM_DIR/nvm.sh \
     && nvm install $NODE_VERSION \
     && nvm alias default $NODE_VERSION \
     && nvm use default

#Install ImageMagick for resizing images
RUN apt-get install -y libpng-dev
RUN apt-get install -y software-properties-common
RUN apt-add-repository -s 'deb http://archive.ubuntu.com/ubuntu/ bionic main'
RUN apt-get update
RUN apt-get -y build-dep imagemagick
RUN mkdir $HOME/imagemagick_build && cd $HOME/imagemagick_build
RUN wget https://www.imagemagick.org/download/ImageMagick.tar.gz \
     && tar xvzf ImageMagick.tar.gz \
     && cd ImageMagick-7.0.8-41 \
     && ./configure \
     && make \
     && make install \
     && ldconfig /usr/local/lib

# Set Working Directory
WORKDIR $WORK_DIR

# Set up app
COPY . $WORK_DIR

# Expose port
EXPOSE 4001

CMD ["node","./dist/server.js"]