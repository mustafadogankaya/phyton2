# Python 3.11 base image for better compatibility
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first for better layer caching
COPY requirements.txt .

# Install Python dependencies with trusted hosts for SSL issues
RUN pip install --no-cache-dir --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org -r requirements.txt

# Copy the rest of the application
COPY . .

# Install the package in development mode
RUN pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org -e .

# Set the default command to run the sample
CMD ["python", "-c", "import sample; sample.hmm()"]