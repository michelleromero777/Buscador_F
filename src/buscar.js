export function highlightAndCount(text, searchTerm) {
    if (!searchTerm.trim()) {
        return { highlighted: text, count: 0 };
    }

    const regex = new RegExp(`\\b${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;

    const highlighted = text.replace(
        regex,
        (match) => `<mark>${match}</mark>`
    );

    return { highlighted, count };
}

export function replaceAll(text, searchTerm, replaceTerm) {
    if (!searchTerm.trim()) {
        return text;
    }

    const regex = new RegExp(`\\b${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    return text.replace(regex, replaceTerm);
}
