import sys

# Read the file
with open(r'c:\Users\anirb\OneDrive\Desktop\portfolio_me\src\App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Modal code to insert
modal_code = '''
        {/* Fullscreen Diagram Modal */}
        {showDiagram && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setShowDiagram(false)}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
              {/* Close Button */}
              <button 
                onClick={() => setShowDiagram(false)}
                className="absolute top-4 right-4 z-50 p-3 bg-red-500/10 hover:bg-red-500 border border-red-500/50 hover:border-red-500 rounded-lg text-red-400 hover:text-white transition-all group"
                aria-label="Close"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Diagram Title */}
              <div className="absolute top-4 left-4 z-50 bg-black/70 backdrop-blur-md border border-emerald-500/30 rounded-lg px-4 py-2">
                <h3 className="text-white font-bold font-mono">{activeSystem.title}</h3>
              </div>

              {/* Image */}
              <img 
                src={activeSystem.image} 
                alt={activeSystem.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

'''

# Find the correct position to insert (after line 1101, before the <style> tag)
# Line 1101 is index 1100 (0-indexed)
insert_pos = 1101

# Insert the modal code
lines.insert(insert_pos, modal_code)

# Also update the styles to include the fade-in animation
# Find the closing of the loading keyframe and add the fade-in animation
for i, line in enumerate(lines):
    if i > 1100 and '@keyframes loading {' in line:
        # Find the closing brace
        for j in range(i, min(i+10, len(lines))):
            if '           }' in lines[j] and 'to { width: 100%; }' in lines[j-1]:
                # Insert fade-in animation after this
                fade_in_code = '''           @keyframes fade-in {
             from { opacity: 0; }
             to { opacity: 1; }
           }
           .animate-fade-in {
             animation: fade-in 0.2s ease-out;
           }
'''
                lines.insert(j+1, fade_in_code)
                break
        break

# Write the file back
with open(r'c:\Users\anirb\OneDrive\Desktop\portfolio_me\src\App.jsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Modal added successfully!")
