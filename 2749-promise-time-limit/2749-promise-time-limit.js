function timeLimit(fn, t) {
    return async (...args) => {
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));
        
        try {
            return await Promise.race([fn(...args), timeoutPromise]);
        } catch (error) {
            throw error;
        }
    };
}
