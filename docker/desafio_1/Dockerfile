FROM golang:alpine3.18 as builder

WORKDIR /app

COPY . .
RUN go mod init desafio.com/m/v2
RUN go build -o /main main.go

FROM scratch
COPY --from=builder /main /main
CMD ["/main"]
