import React from "react"
import loading from "../../assets/loading.gif"

export const Loading = () => {
    return (
        <>
            <div
                id="loadingGlobal"
                className={loading}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 99999,
                    backgroundColor: "rgba(255, 255, 255, 0.90)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(4px)"
                }}
            >
                <img src={loading} alt="loading" />
            </div>
        </>
    )
}
