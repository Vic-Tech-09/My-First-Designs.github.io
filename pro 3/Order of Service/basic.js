
// function addSession() {
//     // Get the form data for a session
//     const sessionTitle = document.getElementById("session-name").value;
//     const minister = document.getElementById("session-minister").value;
//     const startTime = document.getElementById("session-start-time").value;
//     let duration = document.getElementById("session-duration").value;

//     // Convert duration to integer
//     duration = parseInt(duration, 10);

//     // Validate start time and duration before calculating finish time
//     if (!startTime || isNaN(duration)) {
//         alert("Please enter both start time and duration.");
//         return;
//     }

//     // Calculate finish time
//     let startDateTime = new Date(`1970-01-01T${startTime}`);
//     startDateTime.setMinutes(startDateTime.getMinutes() + duration);
//     let finishTime = startDateTime.toTimeString().slice(0, 5); // Get HH:MM format

//     // Create and add the session data to the order of service sessions array
//     const sessionData = {
//         title: sessionTitle,
//         minister: minister,
//         startTime: startTime,
//         finishTime: finishTime, // Automatically calculated
//         duration: duration
//     };

//     orderOfService.sessions.push(sessionData);
//     display(); // Update display after adding a session

//     // Reset input fields
//     document.getElementById("session-name").value = "";
//     document.getElementById("session-minister").value = "";
//     document.getElementById("session-start-time").value = "";
//     document.getElementById("session-duration").value = "";
// }
