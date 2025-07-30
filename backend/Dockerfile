
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download


COPY . .

RUN go build -o /app/main .


FROM alpine:latest
WORKDIR /app


COPY --from=builder /app .


EXPOSE 8083


CMD ["/app/main"]

# FROM golang:1.23-alpine

# WORKDIR /app

# COPY go.mod go.sum ./


# RUN go mod download


# COPY . .

# RUN go build -o /app/main .


# COPY config.yml /app/config.yml


# EXPOSE 8083


# CMD ["/app/main"]

