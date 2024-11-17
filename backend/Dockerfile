FROM golang:1.23.2-bullseye AS builder

WORKDIR /app

COPY . .
RUN go mod tidy

RUN go build -trimpath -ldflags "-w -s" -o app

FROM gcr.io/distroless/base-debian10

COPY --from=builder /app/app /usr/local/bin/

CMD ["app"]