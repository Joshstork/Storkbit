# Storkbit
A React App for Storkbit Business to provide contact information.

## Next.js React app

Located in the `storkbit` folder, install Node.js and then run `npm install`. It is then deployed using AWS Amplify to storkbit.com

## Infrastructure

Included are cloudformation templates for setting up vpc and ec2 for use with code-server and tailscale to allow development from an iPad.

### Tailscale

To install 

Taken from https://tailscale.com/kb/1166/vscode-ipad

`curl -fsSL https://tailscale.com/install.sh | sh`

Installation complete! Log in to start using Tailscale by running:

sudo tailscale up

To have systemd start code-server now and restart on boot:
  sudo systemctl enable --now code-server@$USER
Or, if you don't want/need a background service you can run:
  code-server

tailscale ip --4
100.99.139.61

nano ~/.config/code-server/config.yaml
Set it to 

bind-addr: <100.x.y.z address>:8080
auth: none
cert: false


Apply the changes by restarting code-server:

sudo systemctl restart code-server@$USER


The service is now listening, but only on the Tailscale IP address.
On your iPad, ensure you've connected to your tailnet and that your server appears in the Tailscale application's list of devices.
Open a browser and access your server by visiting http://100.x.y.z:8080/, using your IP address.
