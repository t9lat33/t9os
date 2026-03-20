const barePool = [
    "http://163.245.208.151:8080/",
    "http://163.245.208.151:8081/",
    "http://163.245.208.151:8082/",
    "http://163.245.208.151:8083/"
];

const bare = barePool[Math.floor(Math.random() * barePool.length)];

self.__uv$config = {
    prefix: "/s/ultraviolet/",
    bare: bare,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/s/uv/uv.handler.js",
    bundle: "/s/uv/uv.bundle.js",
    config: "/s/uv/uv.config.js",
    sw: "/s/uv/uv.sw.js",
};
