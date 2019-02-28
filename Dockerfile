FROM nginx:latest

ENV WS_PATH
WORKDIR /usr/share/nginx/html
COPY ./dist/ .

RUN go get -u github.com/golang/dep/cmd/dep
RUN go get -d -v ./...
RUN dep ensure
RUN go install -v ./...

CMD
