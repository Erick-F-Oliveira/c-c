const getStatus = async (req, res) => {
    try {
        res.status(200).json({
            status: "Servidor online",
            timestamp: new Date().toISOString(),
        });
    } catch (e) {
        res.status(500).json({
            status: "Servidor offline",
            error: e.message,
            timestamp: new Date().toISOString(),
        })

    }
}

export default getStatus