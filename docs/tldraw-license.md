# tldraw licensing for the local prototype

Checked against the [official licensing documentation](https://tldraw.dev/community/license) on 2026-10-14.

The default SDK license permits development use. This ticket runs Logia as a local development prototype using `bun run dev`; no license has been purchased or requested, and the SDK attribution is preserved.

Local hosting is not a blanket production exemption. Production use requires a valid trial, commercial, or discretionary non-commercial hobby license. Hobby licenses retain the watermark. Recheck the terms and obtain an appropriate key before distributing or using a production build. Downstream production users need their own applicable license.

Set the public `VITE_TLDRAW_LICENSE_KEY` when a key is obtained. Do not suppress the SDK's licensing checks. `bun run build` verifies compilation; it does not grant production usage rights.

The SDK is source available under its own license, not MIT. Its [license text](https://github.com/tldraw/tldraw/blob/main/LICENSE.md) governs use; example code may have different terms.
