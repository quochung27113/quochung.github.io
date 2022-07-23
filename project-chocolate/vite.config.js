const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                detail: resolve(__dirname, "detail.html"),
                category: resolve(__dirname, "category.html"),
                contact: resolve(__dirname, "contact.html"),
                cart: resolve(__dirname, "cart.html"),
            },
        },
    },
});