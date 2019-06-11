FROM heroku/heroku:18
MAINTAINER Kevan Moothien <kevanmoothien@gmail.com>

RUN apt-get update -qq && \
  apt-get install -y -qq --no-install-recommends \
    build-essential\
    libpq-dev\
    libxml2-dev\
    libxslt1-dev\
    qt5-default\
    libqt5webkit5-dev\
    gstreamer1.0-plugins-base\
    gstreamer1.0-tools\
    gstreamer1.0-x\
    xvfb \
    ruby-dev \
    wget \
    unzip \
    libnss3 \
    libgconf-2-4 \
    sudo \
  && apt-get autoremove \
  && apt-get autoclean \
  && rm -rf /var/lib/apt/lists/* \
  && truncate -s 0 /var/log/*log

# Ruby heroku
RUN apt-get remove -y --purge ruby && curl -s --retry 3 -L https://heroku-buildpack-ruby.s3.amazonaws.com/heroku-18/ruby-2.6.1.tgz | tar -xz && \
  bundle config --global silence_root_warning 1

# Node heroku
RUN export NODE_VERSION=8.10.0 && \
  curl -s --retry 3 -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz -o /tmp/node-v$NODE_VERSION-linux-x64.tar.gz && \
  tar -xzf /tmp/node-v$NODE_VERSION-linux-x64.tar.gz -C /tmp && \
  rsync -a /tmp/node-v$NODE_VERSION-linux-x64/ / && \
  rm -rf /tmp/node-v$NODE_VERSION-linux-x64*


# Bundle
# COPY Gemfile /var/app
# COPY Gemfile.lock /var/app
# RUN bundle install

# Node
# COPY package.json /var/app
# COPY bower.json /var/app
# COPY .bowerrc /var/app
# COPY gulpfile.js /var/app
# COPY gulpfile.coffee /var/app
# RUN npm install --unsafe-perm
# RUN ./node_modules/.bin/bower install --quiet

RUN adduser --gecos '' user && passwd -d user && adduser user sudo

RUN mkdir -p /bundle
RUN chown user:user /bundle
RUN chown user:user /lib/node_modules

USER user

ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle

ENV PATH="/home/user/bin:$PATH"

WORKDIR /home/user

EXPOSE 5000
EXPOSE 5001

# COPY . /var/app

CMD bash
