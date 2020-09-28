############################
# Build container
############################
FROM registry.cto.ai/official_images/bash:latest AS dep

WORKDIR /ops


############################
# Final container
############################
FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim

WORKDIR /ops

ADD package.json .
RUN npm install

COPY --from=dep /usr/local/bin/ux /usr/local/bin/ux
COPY --from=dep /usr/local/bin/sdk /usr/local/bin/sdk

ADD . .
