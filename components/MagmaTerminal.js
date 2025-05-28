'use client';

import { Typewriter } from 'react-simple-typewriter';


const codeString = `import socket
from sys import exit
import json

# Configure exploit parameters
TARGET_IP = "192.168.1.100"
TARGET_PORT = 8080

def establish_connection(ip, port):
    """Establishes a connection to the target."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((ip, port))
        print(f"[*] Connected to {ip}:{port}")
        return s
    except socket.error as e:
        print(f"[-] Connection failed: {e}")
        exit(1)`;

const codeString2 = `def send_payload(conn, data):
    """Sends data over the established connection."""
    payload = json.dumps(data).encode('utf-8')
    conn.sendall(payload + b"\\n")
    print(f"[+] Sent payload: {data}")
    return conn.recv(4096).decode('utf-8')

if __name__ == "__main__":
    s = establish_connection(TARGET_IP, TARGET_PORT)
    response = send_payload(s, {"cmd": "execute", "args": "ls -la /"})
    print(f"[+] Received response: {response}")
    s.close()
    print("[*] Connection closed.")`;

const codeString3 = `# This is a simple Python script to demonstrate a basic exploit
// for educational purposes. It connects to a target server and sends a JSON payload.
// Ensure you have permission to test the target system.
// Use responsibly and ethically.`;

const codeString4 = `
    __  __       _    __  __            _       _     
   |  \\/  |     | |  |  \\/  |          | |     | |    
   | \\  / | __ _| |_ | \\  / | __ _  ___| |_ ___| |__  
   | |\\/| |/ _\` | __|| |\\/| |/ _\` |/ __| __/ __| '_ \\ 
   | |  | | (_| | |_ | |  | | (_| | (__| || (__| | | |
   |_|  |_|\\__,_|\\__||_|  |_|\\__,_|\\___|\\__\\___|_| |_|
`;

export default function MagmaTerminal() {
    return (
        <div className="relative w-full flex items-center justify-center">
            

            <div className="relative z-10 terminal bg-black bg-opacity-70 mb-5 backdrop-blur-md rounded-xl p-8 shadow-2xl max-w-3xl w-11/12 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-400 text-sm">magma_core.py</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed overflow-auto h-[500px] custom-scrollbar text-orange-300 whitespace-pre-wrap">
                    <Typewriter
                        words={[codeString,codeString2,codeString3,codeString4]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={10}
                        deleteSpeed={0}
                        delaySpeed={1000}
                    />
                </pre>
            </div>
        </div>
    );
}
