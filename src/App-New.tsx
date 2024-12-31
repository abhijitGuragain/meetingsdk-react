import "./App.css";
import "react-dom/client";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

function App() {
  const client = ZoomMtgEmbedded.createClient();

  // const authEndpoint = ""; // http://localhost:4000
  const sdkKey = "SDK";
  const meetingNumber = "meeting number";
  const passWord = "meeting password";
  // const role = 1;
  const userName = "username";
  const userEmail = "user email";
  // const registrantToken = "";
  const zakToken = "zak token if any";

  // const getSignature = async () => {
  //   try {
  //     const req = await fetch(authEndpoint, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         meetingNumber: meetingNumber,
  //         role: role,
  //       }),
  //     });
  //     const res = await req.json()
  //     const signature = res.signature as string;
  //     startMeeting(signature)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  async function startMeeting() {
    const meetingSDKElement = document.getElementById("meetingSDKElement")!;
    try {
      await client.init({
        zoomAppRoot: meetingSDKElement,
        language: "en-US",
        patchJsMedia: true,
        leaveOnPageUnload: true,
      });
      await client.join({
        signature: `Your generated signature
`,
        sdkKey: sdkKey,
        meetingNumber: meetingNumber,
        password: passWord,
        userName: userName,
        userEmail: userEmail,
        // tk: registrantToken,
        zak: zakToken,
      });
      console.log("joined successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        {/* For Component View */}
        <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        <button onClick={startMeeting}>Join Meeting</button>
      </main>
    </div>
  );
}

export default App;
