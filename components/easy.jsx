'use client'
const Easy = () => {
  return (
    <div className="grid md:grid-cols-2 my-20 px-10 md:px-36 h-96">
      <div className="flex flex-col md:pl-10 justify-center">
        <div className="text-4xl font-bold">
          As simple as copy and paste
        </div>
        <div className="mt-5">
        Copy paste the code into your ui folder and use the components in your projects. 
        It&apos;s that simple, really.
        </div>
      </div>
      <div className="flex flex-col justify-center content-center pt-8 md:pt-0 text-center">
      <div className="containers ml-24">
      <button className="btn cmd">
        <svg
          fill="#fff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="20px"
          height="20px"
          viewBox="0 0 80 80"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16
            S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98
            c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8
            s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72
            c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8
            h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"
            />
          </g>
        </svg>
        command
      </button>
      <button className="btn c">C</button>

      <style jsx>{`
        .containers {
          width: max-content;
          background: #000000;
          border-radius: 15px;
          padding: 15px;
          display: flex;
          gap: 15px;
          box-shadow: 1px 5px 10px #ffffff50, inset 3px 0 0 #000,
            inset -3px 0 0 #000, inset 0 3px 0 #ffffff23, inset 0 -3px 0 #00000023;
        }
        .btn {
          text-decoration: none;
          border: none;
          outline: none;
          background: transparent;
          padding: 10px;
          box-shadow: 0 0 5px #0000005a, 2px 2px 3px #00000078,
            inset 1px 1px 2px #ffffff9d;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn:focus {
          animation: 0.3s clicked linear;
        }
        .cmd {
          display: flex;
          gap: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        .c {
          width: 75px;
          font-size: 1.5rem;
        }
        @keyframes clicked {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
            box-shadow: 0 0 5px #00000067, inset 0 0 3px #ffffff78;
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
    <div className="containers ml-auto mr-24">
      <button className="btn cmd">
        <svg
          fill="#fff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="20px"
          height="20px"
          viewBox="0 0 80 80"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16
            S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98
            c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8
            s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72
            c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8
            h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"
            />
          </g>
        </svg>
        command
      </button>
      <button className="btn c">V</button>

      <style jsx>{`
        .containers {
          width: max-content;
          background: #000000;
          border-radius: 15px;
          padding: 15px;
          display: flex;
          gap: 15px;
          box-shadow: 1px 5px 10px #ffffff50, inset 3px 0 0 #000,
            inset -3px 0 0 #000, inset 0 3px 0 #ffffff23, inset 0 -3px 0 #00000023;
        }
        .btn {
          text-decoration: none;
          border: none;
          outline: none;
          background: transparent;
          padding: 10px;
          box-shadow: 0 0 5px #0000005a, 2px 2px 3px #00000078,
            inset 1px 1px 2px #ffffff9d;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn:focus {
          animation: 0.3s clicked linear;
        }
        .cmd {
          display: flex;
          gap: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        .c {
          width: 75px;
          font-size: 1.5rem;
        }
        @keyframes clicked {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
            box-shadow: 0 0 5px #00000067, inset 0 0 3px #ffffff78;
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
      </div>
    </div>
  )
}

export default Easy