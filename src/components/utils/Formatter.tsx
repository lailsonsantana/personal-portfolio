export default function formatCode(code: string) {

    let result = [];
    let inString = false;
    let currentString = '';
    let normalText = '';

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === '"' || char === "'") {
            if (inString) {
                result.push(normalText);
                result.push(
                    <span key={`string-${i}`} className="text-[#E7DE6B]">
                        {currentString + char}
                    </span>
                );
                normalText = '';
                currentString = '';
                inString = false;
            } else {
                inString = true;
                normalText += char;
            }
        } else {
            if (inString) {
                currentString += char;
            } else {
                normalText += char;
            }
        }
    }

    if (normalText) {
        result.push(normalText);
    }
    if (currentString) {
        result.push(
            <span key="last-string" className="text-[#E7DE6B]">
                {currentString}
            </span>
        );
    }

    return result;
}