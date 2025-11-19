function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-white/80">
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-semibold">Pictiv.Studio</h4>
            <p className="mt-2 text-sm">Classic photography by Dhiraj • Nashik</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-2 text-sm space-y-1">
              <li>Email: pictiv.studio@example.com</li>
              <li>Phone: +91-XXXXXXXXXX</li>
              <li>WhatsApp: Tap to chat</li>
              <li>Instagram: @dheeraj_deore14</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Studio</h4>
            <p className="mt-2 text-sm">Nashik, Maharashtra</p>
            <p className="text-xs mt-4">© {new Date().getFullYear()} Pictiv.Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer