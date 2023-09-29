import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([{ 
    name: "qr-gen",
    message: "Input your email address"
}
])
.then((answers) => {
    const email = answers["qr-gen"];
    var qr_svg = qr.image(email);
    qr_svg.pipe(fs.createWriteStream('your_qr.png'));

    fs.writeFile("email.txt", email, (err)=> {
        if (err) throw err;
        console.log("data has been saved.");
        });
});
